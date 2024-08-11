'use client'
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { Input } from '../../ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { collections } from '@wix/stores'
import { useWixClient } from '@/hooks/useWixClient'

const FilterProduct = () => {
  const wixClient = useWixClient()

  const [categorie, setCategorie] =
    useState<collections.CollectionsQueryResult>()

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target
    const param = new URLSearchParams(searchParams)
    param.set(name, value)
    replace(`${pathname}?${param.toString()}`)
  }

  useEffect(() => {
    const getListCategorie = async () => {
      const cats = await wixClient.collections.queryCollections().find()
      setCategorie(cats)
    }
    getListCategorie()
  }, [wixClient])

  return (
    <div className='flex items-center justify-between gap-2 flex-wrap py-2 xl:py-5 mt-5'>
      <div className='flex items-center gap-2 flex-wrap'>
        <Select
          onValueChange={(value) =>
            handleFilterChange({
              target: { name: 'type', value },
            } as React.ChangeEvent<HTMLSelectElement>)
          }
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select type' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Type</SelectLabel>
              <SelectItem value='dhysical'>Physical</SelectItem>
              <SelectItem value='digital'>Digital</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          type='text'
          name='min'
          placeholder='min price'
          className='w-[150px]'
          onChange={handleFilterChange}
        />
        <Input
          type='text'
          name='max'
          placeholder='max price'
          className='w-[150px]'
          onChange={handleFilterChange}
        />

        <Select
          onValueChange={(value) =>
            handleFilterChange({
              target: { name: 'categorie', value },
            } as React.ChangeEvent<HTMLSelectElement>)
          }
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select Categorie' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              {categorie?.items?.map((slug, index) => {
                return (
                  <SelectItem value={slug?.slug || 'all-products'} key={index}>
                    {slug.name}
                  </SelectItem>
                )
              })}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='All Filters' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>All Filters</SelectLabel>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Select
        onValueChange={(value) =>
          handleFilterChange({
            target: { name: 'sort', value },
          } as React.ChangeEvent<HTMLSelectElement>)
        }
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Sort By' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value='asc price'>Price (low to high)</SelectItem>
            <SelectItem value='desc price'>Price (high to low)</SelectItem>
            <SelectItem value='asc lastUpdated'>Newest</SelectItem>
            <SelectItem value='desc lastUpdated'>Oldest</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FilterProduct
