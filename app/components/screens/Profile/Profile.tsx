import { FC } from "react";
import { Text, View } from "react-native";

import { useProfile } from "./hooks/useProfile";
import { useAuth } from "../../../hooks/useAuth";
import { useUpdateProfile } from "./hooks/useUpdateProfile";

import { Layout } from "../../Layout/Layout";
import { Padding } from "../../ui/Padding";
import { Heading } from "../../ui/Heading";
import { Loader } from "../../ui/Loader";
import { Field } from "../../ui/Field";
import { Button } from "../../ui/Button";

export const Profile: FC = () => {
  const { logout } = useAuth();
  const {
    isLoading: isProfileLoading,
    name,
    setName,
    profile,
  } = useProfile();

  const {
    isLoading,
    isSuccess,
    updateProfile,
  } = useUpdateProfile(name, profile.docId);

  return (
    <Layout>
      <Heading text="Profile" isCenter/>
      <Padding>
        {isSuccess && (
          <View style={{
            backgroundColor: 'rgb(34 197 94)',
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 8,
          }}>
            <Text style={{
              color: 'rgb(255, 255, 255)',
              textAlign: 'center',
            }}>
              Profile update successfully
            </Text>
          </View>
        )}
        {isProfileLoading || isLoading
          ? <Loader/>
          : (
            <>
              <Field
                onChange={setName}
                value={name}
                placeholder="Enter name"
              />
              <Button
                onPress={updateProfile}
                title="Update profile"
              />
              <Button
                onPress={logout}
                title="Logout"
                colors={['rgb(229 231 235)', '#D6D8DB']}
              />
            </>
          )}
      </Padding>
    </Layout>
  )
}