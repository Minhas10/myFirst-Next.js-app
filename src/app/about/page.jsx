import Image from 'next/image';
import React from 'react';
export const metadata = {
  title: 'About us',
  description: '...',
}
 

const About = () => {
    return (
        <div>
            <h2>About Us</h2>
            <Image src="https://images.unsplash.com/photo-1789427049848-b50415182826"alt="" width={300} height={300}></Image>
            <Image src="/Pi7_photo1.jpeg" width='300'
            height='300' alt=''
            ></Image>
        </div>
    );
};

export default About;