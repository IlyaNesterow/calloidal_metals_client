import styled from 'styled-components'

interface Props {
  darkTheme: boolean
}

const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;

  #content{
    height: 70%;
    width: 40%;
    padding: 5%;
    position: relative;
  }
  #content h1{
    margin-bottom: .6rem;
    font-size: 2.5rem;
    font-family: 'Noto Sans TC', Arial, Helvetica, sans-serif;
    color: #${ props => props.darkTheme ? 'eee' : '222' };
  }
  h5{
    color: #ff5533;
    font-size: 1rem;
    font-weight: 500;
  }
  #content p{
    margin-top: 1.5rem;
    margin-bottom: .5rem;
    margin-left: .9rem;
    color: #${ props => props.darkTheme ? 'bbb' : '555' };
    font-weight: 500;
    letter-spacing: .03rem;
  }
  #content input{
    width: 90%;
    height: 2.8rem;
    border: none;
    background-color: #${ props => props.darkTheme ? '252525' : 'f5f5f5' };
    padding: .5rem 1.3rem;
    border-radius: 1.8rem;
    font-size: 1.1rem;
    transition: box-shadow .3s;
    color: #${ props => props.darkTheme ? 'ddd' : '333' };
  }
  #content button{
    margin-top: 1.8rem;
    width: 90%;
    height: 2.8rem;
    border-radius: 1.8rem;
    font-size: 1.1rem;
    border: none;
    background-color: #3355ee;
    font-size: .9rem;
    font-family: 'Noto Sans TC', Arial, Helvetica, sans-serif;
    color: #eee;  
    transition: background-color .5s;
  }
  #content input:focus{
    outline: none;
    box-shadow: 0 0 .1rem #888;
  }
  #content button:focus{
    outline: none;
  }
  #content button:hover{
    background-color: #3355aa;
  }
  #info{
    margin-left: .5rem;
    font-weight: 700;
  }
  @media only screen and (max-width: 1000px){
    #content{
      width: 60%;
    }
  }
  @media only screen and (max-width: 500px){
    #content{
      width: 80%;
    }
    #content h1{
      margin-bottom: .2rem; 
      font-size: 1.7rem;
    }
    #content input{
      height: 2.3rem;
      padding: .5rem 1.3rem;
      font-size: 1rem;
    }
    #content p{
      margin-top: 1.1rem;
      margin-bottom: .3rem;
      margin-left: .7rem;
    }
    #content button{
      margin-top: 1.5rem;
      width: 90%;
      height: 2.5rem;
      border-radius: 1.8rem;
      font-size: 1rem;
    }
  }
`

export default Container