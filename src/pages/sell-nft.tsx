/*
 * Hedera NFT Minter App
 *
 * Copyright (C) 2021 - 2022 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { TokenId } from '@hashgraph/sdk';
import useHederaWallets from '@hooks/useHederaWallets';
import HTS from '@src/services/HTS';
import { useCallback } from 'react';

export default function SellNFT() {
  const { userWalletId, sendTransaction } = useHederaWallets();

  const buy = useCallback(
    async (
      tokenId: string | TokenId,
      serial: number,
      sender: string,
      receiver: string
    ) => {
      const tx = HTS.sendNFTWithValue(
        '0.0.7125092',
        5,
        '0.0.5830192',
        '0.0.5843252'
      );

      try {
        const res = await sendTransaction(tx);

        return res;
      } catch (e) {
        console.error(e);
      }
    },
    [sendTransaction]
  );

  return (
    <div className="mc--h container--padding container--max-height bg--transparent">
      {!userWalletId ? (
        <div>Firstly, you need connect your wallet!</div>
      ) : (
        <div>
          test:{' '}
          <div
            onClick={async () => {
              await buy('0.0.7125092', 6, '0.0.5830192', '0.0.5843252');
            }}
          >
            Click me
          </div>
        </div>
      )}
    </div>
  );
}
