

namespace TestService.BLL.Context
{
    using System.Collections.Generic;
    using System.Linq;
    using TestService.BLL.Entities;

    public static class ContextInitializer
    {
        public static void Initializer(HeroesContext context)
        {

            context.Database.EnsureCreated();

            if (context.Heroes.Any())
            {
                return;

            }

            var heroes = new List<Hero>();

            heroes.Add(new Hero { Name = "Batman" });
            heroes.Add(new Hero { Name = "Wonder Woman" });
            heroes.Add(new Hero { Name = "Spiderman" });
            heroes.Add(new Hero { Name = "Superman" });
            heroes.Add(new Hero { Name = "Wolverine" });
            heroes.Add(new Hero { Name = "Magneto" });

            heroes.ForEach(hero => context.Add(hero));

            context.SaveChanges();
        }

    }
}