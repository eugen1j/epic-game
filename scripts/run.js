const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Elephant", "Lion", "Bear"],       // Names
      ["QmarDisZnkZxseLMW4qNJmtAV6fF1hcMsG3SRFNuvBKp32", // Images
      "QmfAPumszCB7bVckoruXP8TqajPSvph9C4o69fHPe9MvKj", 
      "QmZLG7X6HQt3GcgWtmNsLufCrdSRcpDLy4yr8BWbvkYEw2"],
      [400, 100, 200],                    // HP values
      [25, 100, 50],                       // Attack damage values
        "T-Rex", // Boss name
        "QmaFKTyRVxSTV3Gm28B74xfFgZZqVob1qCXsAmAZBqR9d6", // Boss image
        10000, // Boss hpw
        50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    
    txn = await gameContract.attackBoss();
    await txn.wait();
    
    txn = await gameContract.attackBoss();
    await txn.wait();

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();