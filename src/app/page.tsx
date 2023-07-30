// "use client";
import dynamic from 'next/dynamic';
import React, { useState } from "react"
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { getBurgers } from '../graphql/queries';
import * as queries from '../graphql/queries';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);
import FetchBurgers from "./Items";
import { ListBurgersQuery, ListSidesQuery } from "@/API";
import BList from "./Items";
import SList from "./Sides";
import DList from "./Drinks";
import DSList from "./Dessert";



import Box from './components/Box';
// const BList = dynamic(() => import("./Items"),{ssr: false});

function Home() {
    // const [showMe, setShowMe] = useState(false);
    // function toggle() {
    //     setShowMe(!showMe);

    // }

    return (
        <>
            <div>
                <Box />
                <div>
                    <div className="text-black-500 flex justify-center grid grid-rows-1">
                        <h1 className="font-semibold  text-xl mt-2 mb-8">BURGERS</h1>
                        <div className="grid grid-cols-3 gap-4">
                            {/* @ts-ignore */}
                            <BList />
                        </div>
                        <h1 className="font-semibold  text-xl mt-2 mb-8">SIDES</h1>
                        <div className="grid grid-cols-3 gap-4">
                            {/* @ts-ignore */}
                            <SList />
                        </div>
                        <h1 className="font-semibold  text-xl mt-2 mb-8">DESSERTS</h1>
                        <div className="grid grid-cols-3 gap-4">
                            {/* @ts-ignore */}
                            <DSList />
                        </div>
                        <h1 className="font-semibold  text-xl mt-2 mb-8">DRINKS</h1>
                        <div className="grid grid-cols-3 gap-4">
                            {/* @ts-ignore */}
                            <DList />
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Home;