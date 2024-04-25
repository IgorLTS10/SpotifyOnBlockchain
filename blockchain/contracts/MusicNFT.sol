// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract MyNFT is ERC721Enumerable, Ownable {
    string private baseURI;
    uint256 public maxSupply = 10000;
    uint256 public maxMintAmountPerTx = 5;
    uint256 private _currentTokenId = 0;

    constructor(string memory _initBaseURI) ERC721("MyNFT", "MNFT") Ownable(msg.sender) {
        setBaseURI(_initBaseURI);
    }

    function mint(uint256 _mintAmount) public {
        uint256 supply = totalSupply();
        require(_mintAmount > 0, "Need to mint at least 1 NFT");
        require(_mintAmount <= maxMintAmountPerTx, "Max mint amount per transaction exceeded");
        require(supply + _mintAmount <= maxSupply, "Max NFT limit exceeded");

        for (uint256 i = 0; i < _mintAmount; i++) {
            _currentTokenId += 1;
            _safeMint(msg.sender, _currentTokenId);
        }
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }
    
}
