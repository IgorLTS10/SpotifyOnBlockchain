import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider, ConnectButton } from "thirdweb/react";
import { sepolia } from "thirdweb/chains";

const client = createThirdwebClient({
    clientId: "89d867501fe07d066dc8f460ab6c20eb",
});

const Connect = () => {
    return (
        <ThirdwebProvider>
            <ConnectButton
                client={client}
                accountAbstraction={{
                    chain: sepolia, // the chain where your smart accounts will be or is deployed
                    factoryAddress: "0xb404680f86b6881022c4145B26332ece12d1a70e", // your deployed factory address
                    gasless: true, // enable or disable gasless transactions
                }}
            />
        </ThirdwebProvider>
    );
}

export default Connect;
