import React from 'react'



class Artist extends React.Component{
    state = {
        genres:["Trending Now","Pop","Hip-Hop / R&B","Rock","Country Western"]
    };

    render () {
        return (
            <div>
                <p>Here is the Artist page!!</p>
            </div>

        );
    };

};

export default Artist;
