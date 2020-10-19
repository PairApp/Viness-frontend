import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
// import 'bootstrap/dist/css/bootstrap.min.css'

export default class CustomSlide extends Component {
    handleDelete = () => {
        this.props.deleteWine(this.props.wine.id)
    }
    render() {
        // const { index, ...props } = this.props;
        let wine = this.props.wine
        return (
            <div className="saved-slide" id='saved-slide'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{wine.title}</Card.Title>
                        {/* <Card.Text>
                            {wine.description}
                        </Card.Text> */}
                    </Card.Body>
                    <Card.Img variant="top" src={wine.imageUrl} alt={wine.title} />

                    {/* <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup> */}
                    <Card.Footer>
                        <Card.Link href="#"><button onClick={this.handleDelete}>remove</button></Card.Link>
                        <Card.Link href="#"><button>info</button></Card.Link>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}