import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Players from './Players';

function Playercard(props) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
     <Card.Img variant="top" src={props.Player.image} alt={props.Player.name}/>

        <Card.Title style={{fontSize:30}}>name:{props.Player.name}</Card.Title>
        <div style={{display:'flex',gap:'40px'}}>
        <Card.Text style={{fontSize:20}}>Number:{props.Player.Number}</Card.Text>
        <Card.Text style={{fontSize:20}}>age:{props.Player.age}</Card.Text>
        </div>
        <Card.Text style={{fontSize:20}}>nationality:{props.Player.nationality}</Card.Text>
        <Card.Text style={{fontSize:20}}>team:{props.Player.team}</Card.Text>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Playercard;