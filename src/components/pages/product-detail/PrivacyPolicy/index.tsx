import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'
import React from 'react'
import ListPaymentIcon from './ListPaymentIcon'

const PrivacyPolicy = () => {
  return (
    <div className='px-1'>
      <h2 className='text-md font-semibold border-b border-black w-fit'>
        Privacy Policy:{' '}
      </h2>
      <div className='flex flex-col gap-1 mt-2'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='py-1'>
              SHIPPING & RETURN
            </AccordionTrigger>
            <AccordionContent className='bg-gray-100 p-1'>
              <div className='flex flex-col'>
                <h4 className='font-semibold text-[18px]'>SHIPPING & RETURN</h4>
                <p className='text-xs'>
                  Delivery duties are included in the item price when shipping
                  to all EU countries, New Europe, Switzerland, Japan, South
                  Korea, Hong Kong SAR, Canada, China Mainland, Singapore,
                  Australia, Taiwan Region, Thailand, United Arab Emirates and
                  the United States. All import duties are included in your
                  order – the price you see is the price you pay.
                </p>
                <p className='text-xs'>
                  Need more information? Read our{' '}
                  <Link
                    href={'/shipping-delivery'}
                    className='font-semibold mx-[3px]'
                  >
                    Shipping & Delivery
                  </Link>
                  conditions.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='py-1'>PAYMENT METHOD</AccordionTrigger>
            <AccordionContent className='bg-gray-100 p-1'>
              <div className='flex flex-col'>
                <h4 className='font-semibold text-[18px]'>PAYMENT METHOD</h4>
                <p className='text-xs mb-4'>
                  We accept all major credits cards as well as Paypal.
                </p>
                <ListPaymentIcon />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='py-1'>
              HELP AND CONTACT
            </AccordionTrigger>
            <AccordionContent className='bg-gray-100 p-1'>
              <div className='flex flex-col'>
                <h4 className='font-semibold text-[18px]'> HELP AND CONTACT</h4>
                <div className='flex flex-col'>
                  <div className='flex items-center gap-1 text-xs'>
                    Phone EU:
                    <Link href={'tel:+44 808 1096 1114'} className='font-bold'>
                      +44 808 1096 1114
                    </Link>
                  </div>
                  <div className='flex items-center gap-1 text-xs'>
                    Email:
                    <Link
                      href={'mailto:ecommerce@off---white.com'}
                      className='font-bold'
                    >
                      ecommerce@off---white.com
                    </Link>
                  </div>
                </div>
                <p className='text-xs my-2'>
                  Customer service support, inquiries related to: prices and
                  currency, order and preorder payment, order status, shipment
                  info, return, and exchange.
                </p>
                <p> Working Hours: Monday-Friday 9AM - 6PM GMT</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default PrivacyPolicy
