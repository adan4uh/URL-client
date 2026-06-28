import React from 'react'
import axios from 'axios'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
    const [data, setData] = React.useState({ originalUrl: '' });
    const [result, setResult] = useState({
        message: ''
    })
    const [error, setError] = useState(false);
    const [mode, setMode] = useState('moon');

    const handleCreateButton = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/shorten`, data);
            setData({ originalUrl: res.data.shortUrl })
            
            setError(false)
            setResult(res.data);


        } catch (error) {
             setError(true)
            setResult(error.response?.data)
        }
    }

    const handleModeButton = () => {
            if (mode === 'moon') {
                setMode('sun')
            }else{
                setMode('moon')
            }
          }

    const handlePasteButton = async () =>{
       if (data.originalUrl === '') {
            setData({
        originalUrl: await navigator.clipboard.readText()
       })
       }else{
        await navigator.clipboard.writeText(data.originalUrl)
        setResult({
            message: 'URL copied!'
        })
       }
        
    }

    return (
        <div className={mode === 'moon' ? 'mainContainer' : 'darkModeNav'}>
            <div className="menuContainer">
                <ul>
                    <li><i className={`fa-regular fa-${mode}`} onClick={handleModeButton}></i></li>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Doucmentation</li>
                </ul>
            </div>

            <hr />

            <div className="searchContainer">
                <div className="logo">
                    Short.ly
                </div>

                <div className="searchBar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <span style={{
                        color: error ? "red" : "green"
                    }}>{result.message}</span>
                    <input
                        name='searchInput'
                        type="text"
                        value={data.originalUrl}
                        onChange={(e) => {
                            setData({
                                originalUrl: e.target.value
                            });
                            setResult({})
                        }}
                        placeholder='Paste URL...' />
                        <i 
                        className={data.originalUrl === '' ? 'fa-solid fa-paste' : 'fa-solid fa-copy'}
                        onClick={handlePasteButton}
                        id='copyButton'></i>
                    <button onClick={handleCreateButton}>Create</button>
                </div>

                <div className="buttons">
                    <button id='signupButton'>Sign Up</button>
                    <button id='signinButton'>Sign In</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar