import React from 'react'
import * as queries from '../graphql/queries';
import { listBurgers, listSides } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListBurgersQuery, ListSidesQuery } from '../API'
import { burgers, S3object } from '../API';
import { GraphQLResult } from '@aws-amplify/api';
import Link from 'next/link';


const BurgerQuery = `
  query MyQuery {
    listBurgers {
      startedAt
      items {
        id
        title
        price
        description
        image {
            bucket
            region
            key
          }
          createdAt
          updatedAt
      }
    }
  }
`;

type burgir = {
  __typename: "burgers",
  id: string,
  title: string,
  price: number,
  description: string,
  image: S3object,
  createdAt: string,
  updatedAt: string,
}


type MyQueryResult = GraphQLResult<ListBurgersQuery>;
const FetchBurgers = async () => {
  const result = await API.graphql(graphqlOperation(BurgerQuery)) as MyQueryResult;
  const allBurgers = result.data?.listBurgers?.items;
  const Burgers: burgir[] = [];
  result.data?.listBurgers?.items.forEach((value, index) => {
    Burgers.push(value)

  });


  // Simple query
  // const allBurgers = await API.graphql<GraphQLQuery<ListBurgersQuery>>(
  //  { query: queries.listBurgers }
  // );
  // const burgersList: burgers[] = allBurgers
  // console.log(allBurgers);

  // console.log(allBurgers);
  return Burgers;
}

async function BList() {

  const bList = await FetchBurgers();

  return <>
    {bList.map((burgir) => (
      <div key={burgir.id} className="w-64 h-80 shadow-lg grid grid-rows-7 -space-y-10" >
        <h2 className="row-end-5 ml-3  font-semibold tracking-tighter" >{burgir.title}</h2>
        <p className="row-end-6 ml-3   tracking-tighter text-sm">{burgir.description}</p>
        <p className="row-end-7 ml-3   text-xl">£{burgir.price}0</p>

      </div>
    ))}
  </>;

}
export default BList;

