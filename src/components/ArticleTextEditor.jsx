import React from 'react'
import JoditEditor from 'jodit-react';
import { useState, useMemo, useRef, } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function ArticleTextEditor({ user }) {
	const editor = useRef(null);
	const [content, setContent] = useState('');
	const [messageClose, setMessageClose] = useState('article-post-message-hidden')
	const [category, setCategory] = useState('')
	const [articleHeroImage,setArticleHeroImage] = useState('')
	const [articleHeroHeader,setArticleHeroHeader] = useState('')
	const [serverMessage, setServerMessage] = useState('')

	const closeMessage = () => {
		setMessageClose('article-post-message-hidden')
	}
	const messageOn = () => {
		setMessageClose('article-post-message')
	}
	const articleCategory = (e) => {
		setCategory(e.target.value);
		console.log(category);
	}
	const articleHeroImageUrl = (e) =>{
		setArticleHeroImage(e.target.value)
	}
	const articleHeroHeaderValue = (e) =>{
		setArticleHeroHeader(e.target.value)
	}


	const postArticle = async (e) => {
		e.preventDefault()
		if (content && category && articleHeroImage) {


			const userObject = {
				category: category,
				article: content,
				authorName: user.name,
				authorEmail: user.email,
				authorProfileUrl: user.picture,
				articleHeroUrl:articleHeroImage,
				articleHeading:articleHeroHeader,
			}

			try {

				const response = await axios.post('https://yuvacracybackendapi.onrender.com/api/post/article', userObject);
				setServerMessage('Post Added Sucessfully');
				setMessageClose('article-post-message')
				setCategory('')
				setContent('')
				setArticleHeroImage('')
				setArticleHeroHeader('')



			} catch (error) {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
					setServerMessage(`Error: ${error.response.data}`);
				} else if (error.request) {
					console.log(error.request);
					setServerMessage('Error: No response received from server');
				} else {
					console.log('Error', error.message);
					setServerMessage(`Error: ${error.message}`);
				}
				console.log(error.config);
			}


		} else {
			alert('Please Fill the Form ')
		}
	}

	return (
		<>
			<div className='article-post'>
				<div className={messageClose}>
					<i className="fa-solid fa-circle-check"></i>
					<h1>{serverMessage}
						<i onClick={closeMessage} >

							<CloseIcon className='article-post-message-close' />
						</i>
					</h1>

				</div>
			</div>
			<div className="article-text-editor">

				<form className='article-form' onSubmit={(e) => postArticle(e)} >



					<FormControl className='article-selector' sx={{ m: 1, minWidth: 120 }}>
						<InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
						<Select
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							value={category}
							label="Select Category"
							onChange={articleCategory}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={'Education'}>Education</MenuItem>
							<MenuItem value={'Economic'}>Economic</MenuItem>
							<MenuItem value={'Governance'}>Governance</MenuItem>
							<MenuItem value={'Legislature'}>Legislature</MenuItem>
						</Select>
					</FormControl>

					<Box
						component="form"
						sx={{
							'& > :not(style)': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
						value={articleHeroHeader}
						onChange={(e)=>articleHeroHeaderValue(e)}
					>
						<TextField id="outlined-basic" label="Article Heading" variant="outlined" />
						
					</Box>

					<Box
						component="form"
						sx={{
							'& > :not(style)': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
						value={articleHeroImage}
						onChange={(e)=>articleHeroImageUrl(e)}
					>
						<TextField id="outlined-basic" label="Hero Image Url" variant="outlined" />
						
					</Box>


					<JoditEditor
						ref={editor}
						value={content}
						tabIndex={1} // tabIndex of textarea
						onBlur={newContent => setContent(newContent)}
						onChange={newContent => { }}
						className='editor'
					/>

					<button className='article-post-button' type='submit'>Post</button>

				</form>

			</div>


			{/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}




		</>
	)
}

export default ArticleTextEditor
