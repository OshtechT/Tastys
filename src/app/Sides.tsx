import React from 'react'
import * as queries from '../graphql/queries';
import { listBurgers, listSides } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListBurgersQuery, ListSidesQuery } from '../API'
import { burgers, S3object } from '../API';
import { GraphQLResult } from '@aws-amplify/api';
import Link from 'next/link';

const SideQuery = `
  query MyQuery {
    listSides {
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
type sidee = {
    __typename: "side",
    id: string,
    title: string,
    price: number,
    description: string,
    image: S3object,
    createdAt: string,
    updatedAt: string,

};

type MyQueryyResult = GraphQLResult<ListSidesQuery>;
const FetchSides = async () => {
    const result = await API.graphql(graphqlOperation(SideQuery)) as MyQueryyResult;
    const allSides = result.data?.listSides?.items;
    const Sides: sidee[] = [];
    result.data?.listSides?.items.forEach((value, index) => {
        Sides.push(value)

    });


    // Simple query
    // const allBurgers = await API.graphql<GraphQLQuery<ListBurgersQuery>>(
    //  { query: queries.listBurgers }
    // );
    // const burgersList: burgers[] = allBurgers
    // console.log(allBurgers);

    // console.log(allBurgers);
    return Sides;
}

async function SList() {

    const sList = await FetchSides();

    return <>
        {sList.map((sidee) => (
            <div key={sidee.id} className="w-64 h-80 shadow-lg grid grid-rows-7 -space-y-10" >
                <h2 className="row-end-5 ml-3  font-semibold tracking-tighter" >{sidee.title}</h2>
                <p className="row-end-6 ml-3   tracking-tighter text-sm">{sidee.description}</p>
                <p className="row-end-7 ml-3   text-xl">£{sidee.price}0</p>

            </div>
        ))}
    </>;

}
export default SList;