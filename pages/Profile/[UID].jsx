import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Profile = ({ user }) => {
  console.log(JSON.parse(user));
  return (
    <div className="flex flex-col  gap-12 bg-slate-200 w-full min-h-screen">
      <Navbar currUser={user} />
      <section className="flex mx-auto px-10 py-7 flex-row justify-between text-white items-center w-[600px] rounded-md bg-slate-900 ">
        <Image
          width={160}
          height={160}
          src={JSON.parse(user).image}
          className=" rounded-full  "
          alt=""
        />
        <div className="flex gap-10 flex-col items-start justify-center">
          <div className="flex flex-row gap-4">
            <h2>Name</h2>
            <p>{JSON.parse(user).name}</p>
          </div>
          <div className="flex flex-row gap-4">
            <h2>Email</h2>
            <p>{JSON.parse(user).email}</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <h2>Verified email</h2>
            <p>{JSON.parse(user).emailVerified ? 'True' : 'False'}</p>
            {!JSON.parse(user).emailVerified && (
              <button className="bg-green-600 p-3 rounded-md">
                Verify Now
              </button>
            )}
          </div>
        </div>
      </section>
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log('this is the profile server log');
  console.log(context.query);
  const { id } = JSON.parse(context.query.user);
  console.log(JSON.parse(context.query.user));
  return {
    props: {
      user: JSON.parse(context.query.user),
    },
  };
}
export default Profile;
