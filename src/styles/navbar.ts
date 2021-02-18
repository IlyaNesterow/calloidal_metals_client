import styled from 'styled-components'

interface NavbarProps {
  opened: boolean
  darkTheme: boolean
}

const Navbar = styled.nav<NavbarProps>`
  width: 100vw;
  transition: background-color .2s;
  background-color: ${ props => props.darkTheme ? '#111' : '#fff' };
  display: flex;
  justify-content: space-between;
  z-index: 5; 

  #Menu{
    width: 1.3rem;
    margin-top: 1.8rem;
    margin-right: 2rem;
  } 
  #Menu div{
    width: 100%;
    height: 2px;
    background-color: ${ props => props.darkTheme ? '#fff' : '#333' }; 
  }
  #top, #middle, #bottom{
    position: absolute;
    transition: all .3s; 
  }
  #top{
    left: 0; top: 0;
  }
  #middle{
    left: 0; top: .5rem;
  }
  #bottom{
    left: 0; top: 1rem;
  }
  @media only screen and (max-width: 1120px){
    #nav-link-area{
      display: none;
    }
    #languages-and-theme{
      display: none;
    }
    #Menu{
      display: block;
      position: relative;
      align-items: center;
      margin-right: 2rem;
    } 
    .opened > #middle{
      opacity: 1; 
      width: 100%;
      margin-left: 0;
    } 
    .closed > #middle{
      opacity: 0;
      width: 0;
      margin-left: 50%;
    }
    .closed > #top{
      transform: rotate(45deg);
      top: .5rem;
    }
    .closed > #bottom{
      transform: rotate(-45deg);
      top: .5rem;
    }
  }
`

export default Navbar