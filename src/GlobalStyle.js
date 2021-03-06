import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
		padding:0;
		margin:0;
		box-sizing:border-box;
	}
	html{
		@media (max-width:1300px){
		font-size:80%;
	}
	}
	body{
		font-family:'Inter',sans-serif;
		background-color:#1b1b1b;
		color:white;
		overflow-x:hidden;
	}
	
	button{
		font-size:1.1rem;
		font-weight:bold;
		cursor:pointer;
		padding:1rem 2rem;
		border:3px solid #23d997;
		color:white;
		background:transparent;
		transition:0.5s all ease;
		&:hover{
			background-color:#23d997;
			color:white;
		}
	}
	h2{
		font-weight:lighter;
		font-size:4rem;
	}
	h3{
		color:white;
	}
	h4{
		font-weight:bold;
		font-size:2rem;
	}
	a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;
