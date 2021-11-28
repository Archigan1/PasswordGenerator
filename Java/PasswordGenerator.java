import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import java.awt.datatransfer.StringSelection;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;

public class PasswordGenerator {
  public static void main(String[] args) throws IOException {
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    String password = "";
    System.out.print("Length: ");
    int length = Integer.parseInt(reader.readLine());
    for (int i = 0; i < length; i++) {
      password += getRandomCharacter(33, 126);
    }
    System.out.println("Password: " + password);
    System.out.print("Copy to clipboard (Y/N)? ");
    if (reader.readLine().toLowerCase().startsWith("y")) {
      copy(password);
    }
  } 

  public static char getRandomCharacter(int min, int max) {
    return (char)(Math.floor(Math.random() * ((max - min) + 1)) + min);
  }

  public static void copy(String text) {
    StringSelection textToCopy = new StringSelection(text);
    Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
    clipboard.setContents(textToCopy, null);
  }
}