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
  position: relative;

  #Menu{
    width: 1.3rem;
    margin-top: 1.4rem;
    margin-right: .7rem;
    padding: 1rem;
    position: absolute;
    right: 0; 
    top: 0;
  } 
  #Menu div{
    width: 1.1rem;
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
    left: 0; top: .3rem;
  }
  #bottom{
    left: 0; top: .6rem;
  }
  .opened > #middle{
    opacity: 1; 
    width: 1.1rem;
    margin-left: 0;
  } 
  .closed > #middle{
    opacity: 0;
    width: 0;
    margin-left: 50%; 
  }
  .closed > #bottom,
  .closed > #top{
    top: .3rem;
    background-color: ${ props => props.darkTheme ? '#555' : '#fff' };  
  }
  .closed > #top{
    transform: rotate(45deg);
  }
  .closed > #bottom{
    transform: rotate(-45deg);
  }
`

export default Navbar