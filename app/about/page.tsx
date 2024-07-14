import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Peter Milner',
    role: 'Founder & CEO',
    bio: 'Peter Milner is the CEO and Founder of Ingenuity Earth with a degree in Mining Engineering',
    image: '/images/user.png',
  },
  {
    name: 'Hillary Bandawe',
    role: 'Co-founder',
    bio: 'Hillary is a holder of a Bachelor of Engineering in Geological Engineering and Co-founder of Ingenuity Earth',
    image: '/images/user.png',
  },
  {
    name: 'Kealeboga Ratshipa',
    role: 'Lead Developer & Head of Product',
    bio: 'UX specialist focused on creating intuitive and secure document management experiences.',
    image: '/images/user.png',
  },
  {
    name: 'Horace Chipembere',
    role: 'Developer',
    bio: 'Full-stack developer with a knack for blockchain integration and smart contract development.',
    image: '/images/user.png',
  },
];

export default function AboutUs() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12">About Ingenuity Earth</h1>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            With Authentico, we're on a mission to revolutionize document verification using blockchain technology. 
            We believe in creating a world where document authenticity is guaranteed, accessible, and efficient.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex items-center mb-4">
                <div className="w-24 h-24 relative mr-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-500">{member.role}</p>
                </div>
              </div>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
