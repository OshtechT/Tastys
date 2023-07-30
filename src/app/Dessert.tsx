import React from 'react'
import * as queries from '../graphql/queries';
import { listBurgers, listSides } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListDessertsQuery } from '../API'
import { burgers, S3object } from '../API';
import { GraphQLResult } from '@aws-amplify/api';
import Link from 'next/link';

const MyQuery = `
  query MyQuery {
    listDesserts {
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
type desserte = {
    __typename: "desserts",
    id: string,
    title: string,
    price: number,
    description: string,
    image: S3object,
    createdAt: string,
    updatedAt: string,

};

type MyQueryyResult = GraphQLResult<ListDessertsQuery>;
const FetchDesserts = async () => {
    const result = await API.graphql(graphqlOperation(MyQuery)) as MyQueryyResult;
    const allSides = result.data?.listDesserts?.items;
    const Desserts: desserte[] = [];
    result.data?.listDesserts?.items.forEach((value, index) => {
        Desserts.push(value)

    });


    // Simple query
    // const allBurgers = await API.graphql<GraphQLQuery<ListBurgersQuery>>(
    //  { query: queries.listBurgers }
    // );
    // const burgersList: burgers[] = allBurgers
    // console.log(allBurgers);

    // console.log(allBurgers);
    return Desserts;
}

async function DSList() {

    const dsList = await FetchDesserts();

    return <>
        {dsList.map((desserte) => (
            <div key={desserte.id} className="w-64 h-80 shadow-lg grid grid-rows-7 -space-y-10" >
                <h2 className="row-end-5 ml-3  font-semibold tracking-tighter" >{desserte.title}</h2>
                <p className="row-end-6 ml-3   tracking-tighter text-sm">{desserte.description}</p>
                <p className="row-end-7 ml-3   text-xl">£{desserte.price}</p>

            </div>
        ))}
    </>;

}
export default DSList;