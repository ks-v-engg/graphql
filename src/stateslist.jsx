import { useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { stateslist, stateslistbyname } from "./graphql";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Button, Row } from "react-bootstrap";
import { routegql } from "./router";



const Stateslist = () => {

    const {countrycode} = useParams();
    const [getstate, { data, loading, error }] = useLazyQuery(stateslist);
    //const [getstate, { data, loading, error }] = useLazyQuery(stateslistbyname);

    const objnavigation = useNavigate();

    const btnback = (code) => {
    objnavigation(routegql.countrylist);
  }

    useEffect(() => {
       console.log('Country code is '+ countrycode);
        getstate({
            variables: { code : countrycode }
        })
    },[])

    return <div>
        <Row>
        <h1>List of states for {countrycode} </h1>
        <Button onClick={btnback} >Back</Button>
        </Row>
        <Table striped bordered hover>
            <thead>
                <th> Sl. No</th>
                <th> Code</th>
                <th> State </th>
            </thead>
            <tbody>
                    {loading && <p>Fetching...</p>}
                    {error && <p>Something went wrong</p>}
                    {data && data?.countries[0]?.states.map((state, index) => {
                        return <tr key={state.code}>
                            <td>{index + 1}</td>
                            <td>{state.code}</td>
                            <td>{state.name}</td>
                        </tr>
                    })}
                </tbody>
        </Table>
    </div>
}
export default Stateslist;