
import styled from "styled-components";
function App() {
  return (
    <Container>
      <Header>
        <img src="illustration-hero.svg" alt="" />
      </Header>
    <div className="container">
  <h2>Order Summary</h2>
  <p>You can now listen to millions of songs, audiobooks,and podcasts on any device anywhere you like!</p>
  <Song>
    <img src="icon-music.svg" alt="" />
    <Anuel>
    <h4>Annual Plan</h4>
    <span> $59.99/year</span>
    </Anuel>
    
    <button>change</button>
  </Song>
  <Btn>
  <Button>Proceed to Payment</Button>
  <Cbutton>Cancel Order</Cbutton>
  </Btn>
    </div>
    </Container>
  );
}

export default App;
// styled components

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
text-align: center;
justify-content: center;
background-color: #fff;
margin-top: 3rem;
box-shadow: 2px 4px 10px rgba(0,0,0,0.1);
padding-bottom: 2rem;
border-radius: 10px;
h2{
  text-align: center;
  font-weight: 900;
}
p{
  text-align: center;
  width: 15rem;
  font-size: 13px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
}
@media(max-width:375px){
  p{
    
  }
}
`
const Header = styled.header`
width: 20rem;
img{
  width: 100%;
  border-top-right-radius:10px;
  border-top-left-radius: 10px;
}
@media(max-width:375px){
  width: 17rem;
}
`
const Song = styled.div`
width: 15rem;
display: flex;
align-items: center;
justify-content: space-between;
background-color: hsl(225, 100%, 98%);
padding: 1rem;
border-radius: 7px;
margin-bottom: 2rem;
button{
background-color: transparent;
border: none;
font-size: 12px;
font-weight: bold;
color: hsl(245, 75%, 52%);
cursor: pointer;
text-decoration: underline;
opacity: 0.6;
&:hover{
  text-decoration: none;
  color: #645fd0;
  opacity: 1;

}
}
@media(max-width:375px){
  width: 14rem;
  margin-left: 0.3rem;
  padding: 0.8rem;
}
`
const Button = styled.button`
width: 17rem;
background-color: hsl(245, 75%, 52%);
color: #fff;
margin-bottom: 1rem;
border: none;
height: 30px;
border-radius: 7px;
font-weight: bold;
font-size: 11px;
padding: 0.5rem;
cursor: pointer;
&:hover{
  background-color: #645fd0;
}
box-shadow: 5px 20px 10px #357a9f25;
@media(max-width:375px){
  width: 15rem;
  margin-left: 0.3rem;
}
`
const Btn = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Anuel = styled.div`
display: flex;
flex-direction: column;
font-size: 12px;
margin-right: 3.1rem;
line-height:0px;
margin-bottom: 1rem;
h4{
  font-weight: 700;
}
span{
  opacity: 0.5;
}
`
const Cbutton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
opacity: 0.5;
font-weight: bold;
font-size: 11px;
&:hover{
  opacity: 1;
}
`