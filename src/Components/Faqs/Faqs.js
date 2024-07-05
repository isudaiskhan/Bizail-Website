import React from 'react'
import Accordion from './Accordion';

const Faqs = () => {


    const accordionItems = [
        {
          title: 'How to have my website removed?',
          content: 'This is the First items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance.',
        },
        {
          title: 'Does my website meet the qualifications?',
          content: 'This is the Second items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance.',
        },
        {
          title: 'Whats the difference between the free and paid plans?',
          content: 'This is the Third items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance.',
        },

        {
            title: 'How to have my website removed?',
            content: 'This is the Fourth items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance.',
          },

          {
            title: 'I started with a free plan, but now I want to upgrade.',
            content: 'This is the Fourth items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance.',
          },

          {
            title: 'Can I resubmit my website?',
            content: 'This is the Fourth items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance.',
          },

          {
            title: 'Can I downgrade to the free version?',
            content: 'This is the Fourth items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance.',
          },

          {
            title: 'Why do we charge for resubmitting websites?',
            content: 'This is the Fourth items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance.',
          },

      ];

  return (
    <>
      <div className="container mx-auto p-4" id='Faq'>
      <h1 className="text-3xl font-bold mb-4"></h1>
      <Accordion items={accordionItems} />
    </div>

    </>
  )
}

export default Faqs