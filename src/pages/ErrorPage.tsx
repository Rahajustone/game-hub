import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/Navbar/NavBar";

function ErrorPage() {
    const error = useRouteError();
    
  return (
    <>
        <NavBar />
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            minH="50vh"
        >
            <VStack gap={4} textAlign="center">
                <Heading size="2xl">Oops!</Heading>
                <Text fontSize="xl">Sorry, an unexpected error has occurred.</Text>
                <Text textAlign="center">
                    { isRouteErrorResponse(error) ? "Page not found" : "UnExpected error occurred" }
                    <Text as="i" display="block" mt={2}>
                        {error instanceof Error ? error.message : "Unknown error"}
                    </Text>
                </Text>
                <Link 
                    to="/" 
                    style={{
                        color: 'var(--chakra-colors-blue-500)',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--chakra-colors-blue-700)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--chakra-colors-blue-500)'}
                >
                    Go back to the home page
                </Link>
            </VStack>
        </Box>
    </>
  );
}

export default ErrorPage;