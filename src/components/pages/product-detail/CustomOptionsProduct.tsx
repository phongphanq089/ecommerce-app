'use client'
import AddCart from '@/components/shared/AddCart'
import { products } from '@wix/stores'
import React, { useEffect, useState } from 'react'

const CustomOptionsProduct = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string
  variants: products.Variant[] | undefined
  productOptions: products.ProductOption[] | undefined
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string
  }>({})

  const [selectedVariant, setSelectedVariant] = useState<products.Variant>()

  useEffect(() => {
    const variant = variants?.find((v) => {
      const variantChoices = v.choices
      if (!variantChoices) {
        console.log('variantChoices not defined')
        return false
      }
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      )
    })

    setSelectedVariant(variant)
  }, [selectedOptions, variants])

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }))
  }

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants?.some((variant) => {
      const variantChoices = variant.choices

      if (!variantChoices) {
        console.log('variantChoices not defined')
        return false
      }

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      )
    })
  }

  return (
    <div>
      {productOptions?.map((item, index) => {
        return (
          <div key={index}>
            <h4 className='font-medium'>Choose a {item.name}</h4>
            <div className='flex items-center gap-1 mb-1'>
              <ul className='flex items-center gap-2 relative'>
                {item.choices?.map((option, index) => {
                  const disabled = !isVariantInStock({
                    ...selectedOptions,
                    [item.name!]: option.description!,
                  })

                  const selected =
                    selectedOptions[item.name!] === option.description

                  const clickHandler = disabled
                    ? undefined
                    : () => handleOptionSelect(item.name!, option.description!)

                  return (
                    <React.Fragment key={index}>
                      <li>
                        <input
                          type='radio'
                          id={option.value}
                          name={option.description}
                          value={option.value}
                          disabled={disabled}
                          checked={selected}
                          className='hidden peer'
                          onChange={clickHandler}
                          required
                        />
                        {disabled ? (
                          <span className='bg-color-2 p-1 rounded-lg w-[50px] flex items-center justify-center relative'>
                            {option.description}
                            <div className='absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                          </span>
                        ) : (
                          <label
                            htmlFor={option.value}
                            className='inline-flex items-center justify-between w-full  text-color-1 bg-color-2 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-checked:bg-black peer-checked:border-white peer-checked:text-white '
                          >
                            <div className='p-1 w-[50px] flex items-center justify-center'>
                              {option.description}
                            </div>
                          </label>
                        )}
                      </li>
                    </React.Fragment>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}

      <AddCart
        productId={productId}
        variantId={
          selectedVariant?._id || '00000000-0000-0000-0000-000000000000'
        }
        stockNumber={selectedVariant?.stock?.quantity || 0}
      />
    </div>
  )
}

export default CustomOptionsProduct
