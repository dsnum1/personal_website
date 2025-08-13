import React from 'react'
import './Quote.css'
import logo1 from './Images/DSC_0672.JPG'
import FigureExample from './Figure.js'
import HomeBackground from './Images/Draft2/Home1.png'
import socials from './Images/Draft2/Socials.png'
import axios from 'axios'

import { useEffect , useState} from 'react'


function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Quote() {
    return (
        <div className='quote-holder'>
            <QuoteText />
            <QuoteSubHeading/>
        </div>
    )
}


function QuoteText(){
        const [responseData, setResponseData] = useState([])
        const [quoteText, setQuoteText] = useState([])
        const [quoteAuhtor, setQuoteAuthor] = useState([])
        const [quoteChapter, setQuoteChapter] = useState([])
        const [quoteNumber, setQuoteNumber] = useState([])



        useEffect(() => {
            fetchRandomQuote();
        }, []);
        

        async function fetchRandomQuote(){
            // generate random number between 1-18
            // fetch the number of verses between 1 and 18
            // generate a random number between length of the verse and the index
            var result = "lmao"
            var chapter_number = randomNumberInRange(0,18)
        
            var options = {
                method: 'GET',
                url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/'+chapter_number+'/',
                headers: {
                  'X-RapidAPI-Key': process.env.REACT_APP_GITA_API_KEY,
                  'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
                }
              };
            
            var chapterLength = 5
            
            await axios.request(options).then(function (response) {
                chapterLength = response.data["verses_count"]
            }).catch(function (error) {
                console.error(error);
            });
        
            var verse_number = randomNumberInRange(0, chapterLength)
        
            options = {
                method: 'GET',
                url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/'+ chapter_number+'/verses/'+verse_number+'/',
                headers: {
                  'X-RapidAPI-Key': process.env.REACT_APP_GITA_API_KEY,
                  'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
                }
              };
         
              
            await axios.request(options).then(function (response) {
                var verse_found = response.data["translations"][2]["description"]
                var author_name = response.data["translations"][2]["author_name"]  
                setQuoteText(verse_found);        
                setQuoteAuthor(author_name)
                setQuoteChapter(chapter_number)
                setQuoteNumber(verse_number)
                // console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        
        }
    return (
        <>
            <h2 className='quote-text'>{quoteText}</h2>
            <h6 className="source"> From The Bhagavad Geeta
            <br></br>{quoteChapter}:{quoteNumber}
            <br></br>Translated by: {quoteAuhtor}</h6>
        </>
    );
}


function QuoteSubHeading(){
    return(
        <>
        </>
    )
}





export default Quote;

