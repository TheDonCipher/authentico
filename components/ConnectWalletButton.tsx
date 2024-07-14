// components/ConnectWalletButton.tsx
import { useAddress, useMetamask } from '@thirdweb-dev/react';

const ConnectWalletButton = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();

  return (
    <div>
      {address ? (
        <p>Connected as {address}</p>
      ) : (
        <button onClick={connectWithMetamask}>Connect Wallet</button>
      )}
    </div>
  );
};

export default ConnectWalletButton;

