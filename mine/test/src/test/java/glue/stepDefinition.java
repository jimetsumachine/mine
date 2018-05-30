package glue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.*;

public class stepDefinition {
	
	WebDriver driver = null;
	WebElement searchbox=null;
	String PageTitle=null;
	
	@Given("^I navigate to Google home page$")
	public void i_navigate_to_google_home_page() throws Throwable {
	System.setProperty("webdriver.chrome.driver", "C:/Users/theodore.strong/Desktop/chromedriver.exe");
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	driver.get("https://www.google.com");
	}

	@Given("^I enter \"([^\"]*)\" in search box$")
	public void i_enter_in_search_box(String keyword) throws Throwable {
	searchbox = driver.findElement(By.name("q"));
	searchbox.sendKeys(keyword);
	}
	@When("^I press enter$")
	public void i_press_enter() throws Throwable {
	searchbox.submit();
	}
	@Then("^I get results page$")
	public void i_get_results_page() throws Throwable {
	PageTitle = driver.getTitle();
	System.out.println(PageTitle);
	assertEquals("Cheese - Google Search", PageTitle);
	}

}
