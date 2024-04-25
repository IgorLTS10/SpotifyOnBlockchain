// scripts/deploy.js

async function main() {
    // Récupérer les comptes disponibles depuis Hardhat Network
    const [deployer] = await ethers.getSigners();

    // Afficher l'adresse du compte de déploiement
    console.log("Deploying contracts with the account:", deployer.address);

    // Récupérer l'instance de la factory de votre contrat
    const MyNFT = await ethers.getContractFactory("MyNFT");

    // Déployer le contrat
    const myNFT = await MyNFT.deploy("https://mybaseuri.com/");

    // Afficher l'adresse du contrat déployé
    console.log("MyNFT deployed to:", myNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
