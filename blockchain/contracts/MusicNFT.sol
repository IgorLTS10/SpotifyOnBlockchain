// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721Enumerable, Ownable {
    using Strings for uint256;

    // Base URI
    string private baseURI;
    uint256 public maxSupply = 10000; // Nombre maximum de NFTs
    uint256 public maxMintAmountPerTx = 5; // Maximum de NFTs pouvant être mintés par transaction

    constructor(string memory _initBaseURI) ERC721("MyNFT", "MNFT") {
        setBaseURI(_initBaseURI);
    }

    // Fonction pour minting des NFTs
    function mint(uint256 _mintAmount) public {
        uint256 supply = totalSupply();
        require(_mintAmount > 0, "Need to mint at least 1 NFT");
        require(_mintAmount <= maxMintAmountPerTx, "Max mint amount per transaction exceeded");
        require(supply + _mintAmount <= maxSupply, "Max NFT limit exceeded");

        for (uint256 i = 1; i <= _mintAmount; i++) {
            _safeMint(msg.sender, supply + i);
        }
    }

    // Fonction pour setter le base URI
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    // Fonction pour récupérer le base URI
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }
}
