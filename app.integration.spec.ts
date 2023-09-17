import { describe, expect, it } from '@jest/globals';
import {waitFor} from "@testing-library/react-native";
import {renderRouter} from "expo-router/testing-library";

describe('index', () => {
  it('should render', async () => {
    const {getByText} = renderRouter();

    await waitFor(() => {
      expect(getByText("Empty app")).toBeOnTheScreen();
    });
  });
});
