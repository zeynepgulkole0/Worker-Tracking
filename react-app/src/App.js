import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState,useEffect } from "react";
import DataList from "./components/datatable";
import Select from 'react-select';


import {
  Input,
  FormGroup,
  Label,
  Row,
  Col,
  Container,
  Button,
  
} from "reactstrap";

function App() {
  const [isDisable, setIsDisable] = useState(true);
  const [filterCity, setFilterCity] = useState([]);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [type, setType] = useState([]);
  const currentPersonalState = {
    name: "",
    surname: "",
    birthday: "",
    birthplace: "",
    city_id: "",
    district_id: "",    

  };
  const [personals, setPersonals] = useState(currentPersonalState);

  const onClickSave = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/personal/ekle", {personals:personals})
      .then((response) => {
        console.log("ekle");
      });
  };

  const onSelectCity = (e) => {
    setPersonals((value) => ({ ...value, city_id: e.value }));
  }

  const onSelectDistrict = (e) => {
    setFilterCity(district.filter((district) => e.value === district.cit_id));
    setPersonals((value) => ({...value, district_id: e.value}))
    setIsDisable(false);
  }

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/address/index").then((response) => {
      console.log("---zeyy--");
      setCity(response.data[0]);
      setDistrict(response.data[1]);
    });
  }, []);

 


  return (
    <div className="App">
      <Container>
        <Row>
          <Col lg="4">
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="isim giriniz"
                type="text"
                onChange={(e) => setPersonals(e.target.value)}
              />

              <Label for="examplePassword">Surname</Label>
              <Input
                id="surname"
                name="surname"
                placeholder="soyisminizi giriniz"
                type="text"
                onChange={(e) => setPersonals(e.target.value)}
              />
              <Label for="examplePassword">Birthplace</Label>
              <Input
                id="birthplace"
                name="birtplace"
                placeholder="doğum yerinizi giriniz"
                type="text"
                onChange={(e) => setPersonals(e.target.value)}
              />
              <Label for="examplePassword">Birthday</Label>
              <Input
                id="birthday"
                name="birthday"
                placeholder="doğum tarihinizi giriniz"
                type="date"
                onChange={(e) => setPersonals(e.target.value)}
              />
              <Button
                className="mt-3"
                color="primary"
                outline
                size=""
                onClick={onClickSave}
              >
                Save
              </Button>
            </FormGroup>
          </Col>

          <Col lg="4">
          </Col>

          <Col lg="4">
            <div>
          <Select className="mt-4" options={city} onChange={(e)=> onSelectCity(e)}/>
          <Select className="mt-2" options={district} onChange={(e)=> onSelectDistrict(e)}/>
          
          </div>
          </Col>

        </Row>
        <Row className="mt-4">
          <Col>
          <DataList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
