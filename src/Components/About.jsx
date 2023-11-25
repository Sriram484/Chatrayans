import React from 'react';
import Navbar from './Navbar';
import AboutImg from'../Assets/Images/AboutImg.png';
import "../Assets/CSS/About.css"
import Footer from './Footer';

const About = () => {
  return (
    <>
        <Navbar/>
        <div className='abtcontainer'>
            <div className='abtcontainerimg'>
                <img src={AboutImg} alt="about-image" />
            </div>
            <div className='abtcontainercontent'>
                <p style={{color:'black'}}>
                Taking advantage of vast warehouses across the India and other parts of world, we stock over 1 million titles for immediate delivery -- that's more titles than any other online bookseller.
<br></br>
<br></br>
With so many titles, it is vital to give customers an easy way to find precisely the books they are looking for. Our search engine enables customers to locate books by title, author, or keyword in a few seconds at most. Customers with a general idea of what they want can use our Browse pages to sift through hundreds of categories to find exactly the right book. To further assist users, we offer descriptions and reviews, and our See Inside program lets customers read excerpts from tens of thousands of titles. We also offer editor recommendations and customer reviews on hundreds of thousands of titles.
<br></br>
<br></br>



As the ultimate destination for book lovers, Chatrayans offers an incredible array of content. Chatrayans Studio features hundreds of video author interviews, Emmy-winning documentaries, and our weekly book show, Tagged! hosted by Molly Pesce, Chatrayans Review is the leading online-only book review on the Web, packed with literary reviews and interviews. And Chatrayans Reads author-events and much, much more.
                </p>

            </div>
        </div>
        <Footer/>
    </>
  )
}

export default About