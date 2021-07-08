import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap' ;

class DishDetail extends Component {
    renderDish(dish){
        return (
        
        <div className="col-12 col-md-5 m-1">
            <Card key={dish.id}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardTitle>
                    {this.props.dish.name}
                </CardTitle>
                <CardText>
                    {this.props.dish.description}
                </CardText>
            </Card>
        </div>
        
        );}
    
    renderComments(comments){
        if (comments != null){
            const CommentListItems  = comments.map((comment)=>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            })
            
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {CommentListItems}
                </ul>
            </div>
        );
        }
        else{
            return(<div></div>);
        }
        
    };

   
    render() {
        if(this.props.dish != null){
        return (
            <div className="container">
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}
            </div>
            </div>
        );}
        else{
            return(<div></div>);
        }
    } }
    export default DishDetail;