using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;
using Waymark.Api.PeopleApi;

namespace Waymark.Api.Tests
{
    [TestClass]
    public class PeopleApiClientTests
    {
        string baseAddress = "https://techtestpersonapi.azurewebsites.net/api/";
        string token = "Z5Dm297Ijn9weSo75EVtsJHN9HoVE0fgJt8zIGXWV4ZOOCGNpaYBtw";
        string invalidToken = "invalid";

        [TestMethod]
        public async Task GetPeople_ValidToken_ShouldReturnPeople()
        {
            var client = new PeopleApiClient(baseAddress, token);
            var people = await client.GetPeople();

            Assert.IsNotNull(people);
        }

        [TestMethod]
        public async Task GetPeople_InvalidToken_ShouldReturnNull()
        {
            var client = new PeopleApiClient(baseAddress, invalidToken);
            var people = await client.GetPeople();

            Assert.IsNull(people);
        }
    }
}
