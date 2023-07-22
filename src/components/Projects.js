import React from "react";
import ProjectCards from "./ProjectCards";
import Bookapp from "../Assests/bookapp.jpg";
import Netflix from "../Assests/netflix.jpg";
import Foodimg from "../Assests/foodimg.jpg";
const Projects = () => {
  return (
    <div name="Projects" className="w-full h-screen p-4 text-blue-500">
      <div className=" text-blue-600 w-full h-full relative bottom-[30px] ">
        <div className="pb-6 mt-[60px]">
          <h3 className="text-4xl ml-[85px]  font-bold inline border-b-4 border-gray-500 ">
            Recent works
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 ">
          <ProjectCards
            title="Whatsapp Clone"
            des=" Build a WhatsApp clone using ReactJS.
            To build a Log In and Log Out Authentication Flow with Google!.
           To Send a message,by clicking enter button after typing ...
           To stored data of sender and receiver in firestore database.
           It shows messaging time."
            src="https://res.cloudinary.com/dehghhzey/image/upload/v1685612995/chat_pkdbpm.jpg"
            view="https://github.com/lakshitaa1809/Connect-via-Chat"
            live="https://connect-chat-react.netlify.app/"
          />

          <ProjectCards
            title="Book Your Stay-App"
            des="Using NextJs ,creating a Book your stay App.
            To build a beautiful Date and Calendar Functionality where you can book a listing.
            To build a Search Functionality that instantly displays all the listings with the speed of Next.js!.
            To use Tailwind CSS to build a beautiful carasoul, loading bars and lots of of good UI / UX design implementations!.
            To finally deploy the final build on Vercel!"
            src={Bookapp}
            view="https://github.com/lakshitaa1809/Book-your-stay-APP"
            live="https://book-your-stay-app.vercel.app/"
          />
          <ProjectCards
            title="NETFLIX CLONE- STRIPE PAYMENT"
            des="To build a Netflix clone using ReactJs.
             To build a Log In and Log Out Authentication Flow with Google!.
             To build a Beautiful Home Screen with all the movies looking just like Netflix!.
             To build a Subscription page where you can see your active monthly subscription and any recurring subscriptions!
             To build a complete Stripe Payments Checkout Flow for the paid monthly Netflix Subscriptions!
             To use the Firebase extension for synchronising Stripe Recurring Payments with Users.
             To finally deploy the final build using Firebase Hosting!
            "
            src={Netflix}
            view="https://github.com/lakshitaa1809/netflix-clone-stripe-payment"
            live="https://netflix-clone-watchonline.web.app/"
          />
          <ProjectCards
            title="Whatsapp Clone"
            des=" Build a WhatsApp clone using MERN.
            To build a Log In and Log Out Authentication Flow .
           To Send a message,by clicking enter button after typing ...
           To stored data of sender and receiver - MERN.
           It shows messaging time."
            src="https://res.cloudinary.com/dehghhzey/image/upload/v1685612995/chat_pkdbpm.jpg"
            view="https://github.com/lakshitaa1809/ChatAPP-MERN"
            live="https://amazing-phoenix-b1c7f7.netlify.app/"
          />
          <ProjectCards
            title="Food APP -MERN"
            des=" Build a Food ordering through Food APP using MERN.
            To build a Log In and Log Out Authentication Flow MongodB.
            To Create a Food items by admin user...
            To click on the items to order a fod which is preferred,that order items is added to Add to cart .
            Added to the cart items is checkout by clicking Checkout button."
            src={Foodimg}
            view="https://github.com/lakshitaa1809/Food--MERN-APP"
            live="https://food-ordering-app-mern.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
