import java.util.*;

public class Main {
    
    // Helper function matching your C++ 'fill' logic
    public static void fill(int l, int r, int[] arr, int val) {
        for (int i = l + 1; i < r; i++) {
            if (arr[i] < val) {
                arr[i] = val;
            } else {
                break; // Stop immediately if we hit a greater or equal element
            }
        }
    }

    // A small class to hold our structure neatly
    static class ValueRange {
        int value;
        int first;
        int last;

        ValueRange(int value, int first, int last) {
            this.value = value;
            this.first = first;
            this.last = last;
        }
    }

    public static void main(String[] args) {
        int n = 13;
        int[] arr = {1,4,3,5,1,2,3,4,5,4,3,2,1}; // First array
        // int[] arr2 = {6, 5, 4, 7, 6, 5, 8, 2, 6, 8}; // Second array

        // Map to store number and its [first, last] occurrences
        Map<Integer, int[]> mp = new HashMap<>();

        for (int i = 0; i < n; i++) {
            if (mp.containsKey(arr[i])) {
                mp.get(arr[i])[1] = i; // Update last occurrence
            } else {
                mp.put(arr[i], new int[]{i, i}); // Initialize first and last
            }
        }

        // Convert the map entries to a list for sorting
        List<ValueRange> v = new ArrayList<>();
        for (Map.Entry<Integer, int[]> entry : mp.entrySet()) {
            v.add(new ValueRange(entry.getKey(), entry.getValue()[0], entry.getValue()[1]));
        }

        // Sort descending by value (matching your lambda sorting)
        v.sort((a, b) -> Integer.compare(b.value, a.value));

        int m = v.size();
        for (int i = 0; i < m; i++) {
            int l = v.get(i).first;
            int r = v.get(i).last;
            int val = v.get(i).value;

            if (i > 0) {
                int prevL = v.get(i - 1).first;
                int prevR = v.get(i - 1).last;

                if (l <= prevL) {
                    fill(l, prevL, arr, val);
                }
                if (r >= prevR) {
                    fill(prevR, r, arr, val);
                }
            } else {
                fill(l, r, arr, val);
            }

            // Print the array state after each iteration step
            for (int k = 0; k < n; k++) {
                System.out.print(arr[k] + " ");
            }
            System.out.println();
        }

        // Calculate final sum
        int ans = 0;
        for (int i = 0; i < n; i++) {
            ans += arr[i];
        }

        System.out.println("Maximum sum of the array after doing the given operations: " + ans);
    }
}
