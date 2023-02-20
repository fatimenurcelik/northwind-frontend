import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(()=>{
    let productService = new ProductService()
    productService.getProductById(id).then((result)=> {
      setProduct(result.data)})
      .catch((err)=> console.log("hata olustu",err))
  },[])

  console.log(product);

  return (
    <div>
      <Card.Group>
    
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <Card.Header>{product.name}</Card.Header>
            <Card.Meta>{product.id}</Card.Meta>
            <Card.Description>
            {id} Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
