import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider, ConnectButton } from "thirdweb/react";
import { sepolia } from "thirdweb/chains";
import { Wallet } from "thirdweb/wallets";

const client = createThirdwebClient({
    clientId: "89d867501fe07d066dc8f460ab6c20eb",
});

const Connect = () => {

    interface Wallet {
        account: {
            email: string;
            walletAddress: string;
        };
    }

    const handleConnect = async (wallet: Wallet) => {
        // Extract email and wallet address from the connected account
        const { email, walletAddress } = wallet.account;
      
        // Do something with the extracted data
        console.log("Email:", email);
        console.log("Wallet Address:", walletAddress);
      
        // Continue with your logic
    };

    return (
        <ThirdwebProvider>
            <ConnectButton
                client={client}
                accountAbstraction={{
                    chain: sepolia, // the chain where your smart accounts will be or is deployed
                    factoryAddress: "0xb404680f86b6881022c4145B26332ece12d1a70e", // your deployed factory address
                    gasless: true, // enable or disable gasless transactions
                }}
                onConnect={handleConnect}
            />
        </ThirdwebProvider>
    );
}

export default Connect;
