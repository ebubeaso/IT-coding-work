// this is where the main components will lie in
import React, { useState } from 'react';
import {AccessCode, queryUrl} from './LoginPages';

export const Home: React.FC = () => {
    return (
        <div className="Content">
            <h1 className="Title">Bullhorn Candidate Date Added Search</h1>
            <h3 className="Subtitle">The web app to search for candidates by date</h3>
            <br/>
            <h2 className="Reason">Purpose of this web application</h2>
            <p className="Paragraph">
                This web application is used to interact with the Bullhorn REST API 
                through a simple web interface. I know how daunting it is to write 
                API calls to Bullhorn through API clients like Postman or even SOAPui, 
                but writing what you are looking for on a web interface is so much easier!
            </p>
            <p className="Paragraph">
                It has the simple functionality of searching for candidates that were added 
                into your Bullhorn environment either on a specific date or between two
                different dates; the choice is yours!
            </p>
            <p className="Paragraph">
                However, you will need to login first before you can use this, as it requires
                you to enter a Bullhorn REST token to use the date filtering feature. Click on
                "Login" on the navbar to get started!
            </p>
        </div>
    )
}

export const Login: React.FC = () => {
    /*
    This component will handle the login. First, the user will have to enter in
    their login info (client ID, username, password)
     */
    return <AccessCode/>
};

export const SearchPage: React.FC = () => {
    let [dateOption, setDateOption] = useState<string>("");
        if (dateOption === "Single") {
            return (
                <div>
                    <h1 className="Title">The Date Added Search</h1>
                    <h3 className="Subtitle">Click an option below to start searching for candidates</h3>
                    <div className="SearchDiv">
                    <form className="DateSearch">
                        <label htmlFor="date-option" className="FormLabel">Date Option</label>
                        <select id="date-option" name="date-option" onChange={(e) => setDateOption(e.target.value)}>
                            <option value="Select">- Select -</option>
                            <option value="Single">Single Date</option>
                            <option value="Between">Between Dates</option>
                        </select>
                        <br/>
                    </form>
                    <SingleDateSearch/>
                    </div>
                </div>
            )
        } else if (dateOption === "Between") {
            return (
                <div>
                    <h1 className="Title">The Date Added Search</h1>
                    <h3 className="Subtitle">Click an option below to start searching for candidates</h3>
                    <div className="SearchDiv">
                    <form className="DateSearch">
                        <label htmlFor="date-option" className="FormLabel">Date Option</label>
                        <select id="date-option" name="date-option" onChange={(e) => setDateOption(e.target.value)}>
                            <option value="Select">- Select -</option>
                            <option value="Single">Single Date</option>
                            <option value="Between">Between Dates</option>
                        </select>
                        <br/>
                    </form>
                    <BetweenDateSearch/>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <h1 className="Title">The Date Added Search</h1>
                <h3 className="Subtitle">Click an option below to start searching for candidates</h3>
                <div className="SearchDiv">
                <form className="DateSearch">
                    <label htmlFor="date-option" className="FormLabel">Date Option</label>
                    <select id="date-option" name="date-option" onChange={(e) => setDateOption(e.target.value)}>
                        <option value="Select">- Select -</option>
                        <option value="Single">Single Date</option>
                        <option value="Between">Between Dates</option>
                    </select>
                    <br/>
                </form>
                </div>
            </div>
            )
}

export const SingleDateSearch: React.FC = () => {
    let [singleDate, setSingleDate] = useState<string>("");
    let [restToken, setRestToken] = useState<string>("");
    let [searchData, setSearchData] = useState<Array<any>>([]);
    const singleSearch = () => {
        // check to see if you are using the correct Bullhorn rest token
        let userInput = {date: singleDate, url: queryUrl, token: restToken};
        fetch("http://10.0.0.31:5555/search/single", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userInput)
        }).then(response => response.json())
        .then(data => {
            let result = data;
            setSearchData(result["data"]);
        }).catch(err => {
            console.log(err);
        }); 
        return;
    }
    let showTable =  (
            <div className="MyTable">
                <h1 className="Title">Search Results</h1>
                <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Status</th>
                        <th>Email Address</th>
                    </tr> 
                </thead>
                <tbody>
                    {searchData.map((search) => (
                        <tr key={search.id}>
                            <td>{search.firstName}</td>
                            <td>{search.lastName}</td>
                            <td>{search.status}</td>
                            <td>{search.email}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        )
    return (
        <div>
            <div className="DateDiv">
            <form className="DateSearch">
                <label htmlFor="single-date" className="FormLabel">Date</label>
                <input type="date" id="single-date" name="single-date" value={singleDate}
                        onChange={(e) => setSingleDate(e.target.value)} />

                <label htmlFor="token-single" className="FormLabel">Bullhorn Rest Token</label>
                <input type="text" id="token-single" name="token-single" value={restToken}
                        onChange={(e) => setRestToken(e.target.value)} />
            </form>
            <button id="single-search" onClick={singleSearch}>Search</button>
            {(searchData.length > 0) ? showTable : null}
            </div>
        </div>
    )   
}

export const BetweenDateSearch: React.FC = () => {
    let [betweenDate1, setBetweenDate1] = useState<string>("");
    let [betweenDate2, setBetweenDate2] = useState<string>("");
    let [restToken, setRestToken] = useState<string>("");
    let [searchResult, setSearchResult] = useState<Array<any>>([]);
    const betweenSearch = () => {
        // check to see if you are using the correct Bullhorn rest token
        let userInput = {date1: betweenDate1, date2: betweenDate2, 
            url: queryUrl, token: restToken};
        fetch("http://10.0.0.31:5555/search/between", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userInput)
        }).then(response => response.json())
        .then(data => {
            let result = data;
            setSearchResult(result["data"]);
        }).catch(err => {
            console.log(err);
        }); 
        return;
    }

    let resultTable = (
        <div className="MyTable">
            <h1 className="Title">Search Results</h1>
            <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Status</th>
                    <th>Email Address</th>
                </tr>
            </thead>
            <tbody>
                {searchResult.map((search) => (
                    <tr key={search.id}>
                        <td>{search.firstName}</td>
                        <td>{search.lastName}</td>
                        <td>{search.status}</td>
                        <td>{search.email}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )

    return (
        <div>
            <div className="DateDiv">
            <form className="DateSearch">
                <label htmlFor="from-date" className="FormLabel">From</label>
                <input type="date" name="from-date" id="from-date" 
                    onChange={(e) => setBetweenDate1(e.target.value)} />

                <label htmlFor="to-date" className="FormLabel">To</label>
                <input type="date" name="to-date" id="to-date" 
                    onChange={(e) => setBetweenDate2(e.target.value)} />

                <label htmlFor="token-between" className="FormLabel">Bullhorn Rest Token</label>
                <input type="text" id="token-between" name="token-between" value={restToken}
                        onChange={(e) => setRestToken(e.target.value)} />
                <br/>
            </form>
            <button id="single-search" onClick={betweenSearch}>Search</button>
            {(searchResult.length > 0) ? resultTable : null}
            </div>
        </div>
        )
}