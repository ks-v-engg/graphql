import { gql } from "@apollo/client"

export const Getcountries = gql`
query contriesList {
  countries {
  code
  name
  capital
    }
}
`; 

export const stateslist = gql`
query listofstates ($code : String)
  {
    countries(filter : {code : {
      eq : $code
    }
    }) {
      states {
       	name
        code
      }
    }
  }
`;

export const stateslistbyname = gql`
query listofstatesbyname ($name : String)
  {
    countries(filter : {name : {
      eq : $name
    }
    }) {
      states {
       	name
        code
      }
    }
  }
`;
