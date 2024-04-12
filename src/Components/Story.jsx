import React from "react";
import StoryComponent from "./StoryComponent";
import LastStoryComponent from "./LastStoryComponent";

const Story = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-24 py-14">
          <div className="flex flex-col items-center">
            <StoryComponent details={{h1:"Welcome to My Journey of Empowering New Beginnings in Finland", p:"Greetings and a warm welcome to our company's website. I'm excited to unveil the remarkable journey that has led me to become a dedicated entrepreneur in Finland, committed to aiding immigrants and their families in seamlessly integrating into Finnish society."}}/>
            <StoryComponent details={{h1:"Where It All Began: A Student's Dream", p:"My story commences in the vibrant year of 2008 when Finland welcomed me as a student. Little did I foresee that this very chapter would lay the foundation for my entrepreneurial venture. My mission? To offer unwavering support to those embarking on the transformative journey of moving, settling, and adapting to life in Finland."}}/>
            <StoryComponent details={{h1:"From Student to Expert: A Journey of Transformation", p:"My path led me from the seats of learning to the realms of employment, eventually culminating in my mastery of a chosen field. Along this transformative journey, I embraced parenthood, enriching my life with every experience. My path was anything but straightforward; it was a continuous adventure, marked by personal growth and the pursuit of knowledge."}}/>
            <StoryComponent details={{h1:"A Valuable Toolbox: Experiences That Shape Expertise", p:"During my time in Finland, I immersed myself in various training programs and diverse work domains. These experiences provided me with a versatile skill set and molded me into an expert in my chosen field. Yet, my journey extended beyond professional development. Embracing family life in Finland bestowed upon me a unique perspective on the challenges faced by newcomers."}}/>
            <StoryComponent details={{h1:"The Power of Insight: Guiding Newcomers to Success", p:"A profound lesson emerged from my journey: newcomers can navigate their transition more easily with the guidance of experienced hands. My experiences reinforced this valuable insight. I recognized that dealing with various applications, adapting to a new culture, and integrating into an unfamiliar society can be both challenging and perplexing. My accumulated experiences stand as a valuable asset, ready to assist newcomers seeking to settle, adapt, and seamlessly integrate into Finnish society."}}/>
            <StoryComponent details={{h1:"A Heartfelt Mission: Empathy and Compassion in Action", p:"Driven by empathy and compassion, I embarked on a mission to create my own company, dedicated to assisting not just employees but also their families with relocation and integration. My vision is to make the transition to Finland as smooth as possible, ensuring that new opportunities are within reach."}}/>
            <StoryComponent details={{h1:"Fulfilling a Crucial Need: Supporting Finland's International Growth", p:"Simultaneously, I identified a critical challenge in Finland - the shortage of experts in various fields. Companies often grapple with lengthy processes when bringing in international experts. It is essential for these newcomers and their families to seamlessly acclimate to their new surroundings. By expertly managing the relocation process and providing comprehensive support for newcomers and their families, I aim to make this transition truly effortless."}}/>
            <StoryComponent details={{h1:"A Call to Make a Difference: Supporting Both Businesses and Communities", p:"My experiences and expertise fueled my desire to make a meaningful contribution. I am inspired by the idea of helping Finnish companies expand internationally and embrace experts from around the world. For me, establishing this business transcends a mere business decision; it's a way of giving back to the community that has enriched my life. I deeply understand the importance of supporting both businesses and employees on this transformative journey to Finland."}}/>
            <StoryComponent details={{h1:"My Calling: Empowering Your Success", p:"My work is not just a profession; it's a calling deeply rooted in genuine empathy. I am dedicated to leveraging my personal experiences and expertise to empower others. My commitment extends to standing side by side with businesses and their employees, offering unwavering support across all aspects of relocation, settlement, integration, and engagement to ensure your success in Finland."}}/>
            <LastStoryComponent details={{h1:"Join My Journey", p:"I wholeheartedly invite you to be a part of my remarkable journey. Together, we can achieve extraordinary milestones and contribute to the growth of your business. At the same time, I'm here to provide steadfast support to your employees and their families as they embark on their new life journey in Finland. Count on me to assist you in every conceivable way. Welcome to my journey!"}}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
