using CuboNetworkChallenge.Dto;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using System.Net;
using System.Net.Http.Json;

namespace CuboNetworkChallengeTest
{
    [TestClass]
    public class TestEmployeeMethods
    {
        [TestMethod]
        public async Task TestEndpoint()
        {
            //Arrange
            await using var application = new WebApplicationFactory<Program>();
            using var client = application.CreateClient();

            //Act
            var response = await client.GetStringAsync("/");

            //Assert
            Assert.IsNotNull(response);
            Assert.AreEqual("Hello World!", response);
        }

        [TestMethod]
        public async Task GetAllEmployee()
        {
            //Arrange
            await using var application = new WebApplicationFactory<Program>();
            using var client = application.CreateClient();

            //Act
            var response = await client.GetAsync("/employee");

   

            //Assert
            Assert.IsNotNull(response);
            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);
        }

        [TestMethod]
        public async Task CreateEmployee()
        {
            //Arrange
            await using var application = new WebApplicationFactory<Program>();
            using var client = application.CreateClient();
            var request = new EmployeeDto();

            //Act
            var response = await client.PostAsJsonAsync("/employee", request);

            //Assert
            Assert.IsNotNull(response);
            Assert.AreEqual(request.Id, response);
        }
    }
}