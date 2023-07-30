import React from 'react'
import * as queries from '../graphql/queries';
import { listDrinks } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListDrinksQuery } from '../API'
import { drinks, S3object } from '../API';
import { GraphQLResult } from '@aws-amplify/api';
import Link from 'next/link';

const MyQuery = `
  query MyQuery {
    listDrinks {
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
type drinke = {
    __typename: "drinks",
    id: string,
    title: string,
    price: number,
    description: string,
    image: S3object,
    createdAt: string,
    updatedAt: string,

};

type MyQueryyResult = GraphQLResult<ListDrinksQuery>;
const FetchDrinks = async () => {
    const result = await API.graphql(graphqlOperation(MyQuery)) as MyQueryyResult;
    const allDrinks = result.data?.listDrinks?.items;
    const Drinks: drinke[] = [];
    result.data?.listDrinks?.items.forEach((value, index) => {
        Drinks.push(value)

    });


    // Simple query
    // const allBurgers = await API.graphql<GraphQLQuery<ListBurgersQuery>>(
    //  { query: queries.listBurgers }
    // );
    // const burgersList: burgers[] = allBurgers
    // console.log(allBurgers);

    // console.log(allBurgers);
    return Drinks;
}

async function DList() {

    const dList = await FetchDrinks();

    return <>
        {dList.map((drinke) => (
            <div key={drinke.id} className="w-64 h-80 shadow-lg grid grid-rows-7 -space-y-10" >
                <h2 className="row-end-5 ml-3  font-semibold tracking-tighter" >{drinke.title}</h2>
                <p className="row-end-6 ml-3   tracking-tighter text-sm">{drinke.description}</p>
                <p className="row-end-7 ml-3   text-xl">£{drinke.price}</p>

            </div>
        ))}
    </>;

}
export default DList;