import React from 'react'

export default function FAQs() {
    return (
        <div className='w-full p-3 md:max-w-4xl mx-auto'>

            <div className='text-center'>
                <h2 className='text-4xl text-center font-semibold'>Frequently asked questions</h2>
                <p className='text-gray-600 mt-6'>Everything you need to know about the product and billing.</p>
            </div>

            <div className="collapse collapse-plus bg-base-100 border-b border-base-300 mt-10 rounded-none py-3">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">Is there a free trial available?</div>
                <div className="collapse-content text-sm">Yes, you can try us for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border-b border-base-300 rounded-none  py-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">Can I change my plan later?</div>
                <div className="collapse-content text-sm">Click on  on the login page and follow the instructions sent to your email.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border-b border-base-300 rounded-none  py-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">What is your cancellation policy?</div>
                <div className="collapse-content text-sm">Go to  settings and select to make changes.</div>
            </div>

            <div className="collapse collapse-plus bg-base-100 border-b border-base-300 rounded-none  py-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">Can other info be added to an invoice?</div>
                <div className="collapse-content text-sm">Go to  settings and select to make changes.</div>
            </div>

            <div className="collapse collapse-plus bg-base-100 border-b border-base-300 rounded-none  py-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">How does billing work?</div>
                <div className="collapse-content text-sm">Go to  settings and select to make changes.</div>
            </div>


            <div className="collapse collapse-plus bg-base-100 border-b border-base-300 rounded-none  py-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">How do I change my account email?</div>
                <div className="collapse-content text-sm">Go to  settings and select to make changes.</div>
            </div>

        </div>
    )
}
