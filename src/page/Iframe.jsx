import React from 'react'

const Iframe = ({ url }) => {
    return (
        <>
            <iframe
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    border: '0px',
                    backgroundColor: 'black',
                }}
                src={url}
            />
        </>
    )
}

export default Iframe
