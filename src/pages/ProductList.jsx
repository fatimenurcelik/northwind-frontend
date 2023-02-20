import React, { useState , useEffect} from "react";
import { Table, Icon, Menu, Button } from "semantic-ui-react";
import ProductService from "../services/productService";
import {Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartAction";
import { removeFromCart } from "../store/actions/cartAction";

export default function ProductList() {
  //bir fonksiyon çağırmak için gibi düşünülebilir
  const dispatch = useDispatch()

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    //component yüklendiğinde çalışması istenen kod yani sayfa yüklendiğinde
    let productService = new ProductService()
    productService.getProducts().then((result)=> {
      setProducts(result.data)})
      .catch((err)=> console.log("hata olustu",err))
  },[])
console.log(products);

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product))
    console.log(product);
  }

  const handleRemoveFromCart = (product) =>{
    dispatch(removeFromCart(product))
    console.log(product);
  }
  

  // const products = [
  //   {
  //     name: "cilek",
  //     categoryName: "kitap",
  //     unitsInStock: 25,
  //     unitPrice: 10
  //   },
  //   {
  //     name: "yazilima giris",
  //     categoryName: "kitap",
  //     unitsInStock: 10,
  //     unitPrice: 80
  //   }
  // ]

  return (
    <div>
      <Table celled>
        <Table.Header> 
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell><Link to={`/products/${product.id}`}>{product.name}</Link></Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell>{product.categoryName}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleAddToCart(product)}>Sepete Ekle</Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleRemoveFromCart(product)}>Sepetten Sil</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
