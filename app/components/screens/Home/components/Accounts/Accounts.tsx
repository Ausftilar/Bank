import { FC, Fragment } from "react"
import { Text, View } from "react-native"
import { useAccounts } from "./hooks/useAccounts";

import { Padding } from "../../../../ui/Padding";
import { Loader } from "../../../../ui/Loader";
import { AccountItem } from "./components/AccountItem";

export const Accounts: FC = () => {
  const { accounts, isLoading }= useAccounts();

  return (
    <Padding>
      {isLoading
        ? <Loader/>
        : accounts.length
          ? (
            accounts.map((account, index) => (
              <Fragment key={account._id}>
                <AccountItem account={account}/>

                {index + 1 !== accounts.length && (
                  <View
                    style={{
                      borderBottomColor: '#E0E1E2',
                      borderBottomWidth: 1,
                      marginBottom: 24,
                    }}
                  />
                )}
              </Fragment>
            ))
          )
          : (
            <Text
              style={{
                textAlign: 'center',
                marginTop: 26,
              }}>
              You dont't have cards
            </Text>
          )}
    </Padding>
  )
}