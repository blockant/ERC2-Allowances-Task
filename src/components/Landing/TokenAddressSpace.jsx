const TokenAddressSpace=()=>{
    const tokenAddressSpace=[
        '0xC5a7c173b055B762D9FB798FAb14FB4cD7095355'
    ]
    return (
        <>
            <label>Token Address space</label>
            <ul>
                {tokenAddressSpace.map(address=>{
                    return (<li>{address}</li>)
                })}
            </ul>
        </>
    )
}
export default TokenAddressSpace