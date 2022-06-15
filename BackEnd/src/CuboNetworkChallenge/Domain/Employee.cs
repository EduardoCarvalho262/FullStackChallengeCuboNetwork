namespace CuboNetworkChallenge.Domain
{
    public record Employee
    {
        public Guid Id { get; }
        public string? FirstName { get;}
        public string? LastName { get;}
        public int Participation { get;}
    }
}
